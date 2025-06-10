<template>
    <div class="bg-gray-100 min-h-screen">
        <div class="flex flex-col items-center justify-center min-h-screen p-4">
            <div class="min-w-[450px] max-w-[450px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Modest CMS</h1>
                    <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Acesse o painel administrativo</p>
                </div>

                <form @submit.prevent="login" class="space-y-4">
                    <div>
                        <label for="email"
                            class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">E-mail</label>
                        <input v-model="email" type="email" id="email" required :disabled="isLocked"
                            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="email@exemplo.com" />
                    </div>

                    <div>
                        <label for="password"
                            class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
                        <input v-model="password" type="password" id="password" required :disabled="isLocked"
                            class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="••••••••" />
                    </div>

                    <div v-if="error" class="text-red-500 text-sm font-medium">
                        {{ error }}
                    </div>

                    <div v-if="isLocked" class="text-yellow-500 text-sm font-medium">
                        Múltiplas tentativas inválidas. Aguarde {{ lockCountdown }}s para tentar novamente.
                    </div>

                    <button type="submit" :disabled="loading || isLocked"
                        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition disabled:opacity-50">
                        {{ loading ? 'Entrando...' : 'Entrar' }}
                    </button>
                </form>

                <div class="text-center text-sm text-gray-500 dark:text-gray-400">
                    Esqueceu sua senha?
                    <a href="#" class="text-blue-600 hover:underline dark:text-blue-400">Recuperar</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'blank',
    middleware: [], // Sem middleware aqui
})


const email = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const router = useRouter();

// Proteção contra tentativas
const maxAttempts = 5;
const lockDuration = 30; // segundos
const attempts = ref(0);
const isLocked = ref(false);
const lockCountdown = ref(0);
let lockTimer: NodeJS.Timeout;

watch(isLocked, (val) => {
    if (val) {
        lockCountdown.value = lockDuration;
        lockTimer = setInterval(() => {
            lockCountdown.value--;
            if (lockCountdown.value <= 0) {
                isLocked.value = false;
                attempts.value = 0;
                clearInterval(lockTimer);
            }
        }, 1000);
    }
});

async function login() {
    if (isLocked.value) {
        error.value = `Login bloqueado. Tente novamente em instantes.`
        return
    }

    error.value = ''
    loading.value = true

    try {
        const { $axios } = useNuxtApp()

        const response = await $axios.post('/usuarios/auth', {
            email: email.value,
            senha: password.value,
        })

        const data = response.data || response // depende da resposta do backend

        if (data?.token) {
            localStorage.setItem('modest_token', data.token)
            router.push('/admin/dashboard')
        } else {
            throw new Error('Credenciais inválidas')
        }
    } catch (err: any) {
        attempts.value++

        if (attempts.value >= maxAttempts) {
            isLocked.value = true
            error.value = 'Muitas tentativas inválidas. Aguarde 1 minuto para tentar novamente.'

            // Desbloqueia após o tempo
            setTimeout(() => {
                attempts.value = 0
                isLocked.value = false
                error.value = ''
            }, lockDuration)
        } else {
            error.value = err?.response?.data?.message || 'Login falhou. Verifique suas credenciais.'
        }
    } finally {
        loading.value = false
    }
}
</script>
