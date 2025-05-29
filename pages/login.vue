<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <form @submit.prevent="login" class="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h1 class="text-2xl mb-4 font-semibold">Login</h1>
            <input v-model="email" type="email" placeholder="Email" class="border p-2 mb-4 w-full" required />
            <input v-model="password" type="password" placeholder="Senha" class="border p-2 mb-4 w-full" required />
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                Entrar
            </button>
            <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
        </form>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref(null)

function login() {
    // mock login: aceita só "admin@admin.com" / "123456"
    if (email.value === 'admin@admin.com' && password.value === '123456') {
        localStorage.setItem('token', 'mock-token') // simula token
        router.push('/dashboard')
    } else {
        error.value = 'Email ou senha incorretos.'
    }
}
</script>
