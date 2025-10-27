// src/api/auth.ts
export type User = {
  id: string
  email: string
  username: string
  password: string
}

const USERS_KEY = 'rg_users'
const SESSION_KEY = 'rg_session'

function getUsers(): User[] {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]')
  } catch {
    return []
  }
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function getCurrentUser(): User | null {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null')
  } catch {
    return null
  }
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY)
}

export async function registerUser(
  email: string,
  username: string,
  password: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const users = getUsers()
  const exists = users.some((u) => u.email.toLowerCase() === email.toLowerCase())
  if (exists) return { ok: false, error: 'Ya existe un usuario con ese email.' }

  const newUser: User = {
    id: crypto.randomUUID?.() || String(Date.now()),
    email,
    username,
    password,
  }
  users.push(newUser)
  saveUsers(users)

  localStorage.setItem(SESSION_KEY, JSON.stringify(newUser))
  return { ok: true }
}

export async function loginUser(
  email: string,
  password: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const users = getUsers()
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password,
  )
  if (!user) return { ok: false, error: 'Credenciales inválidas.' }

  localStorage.setItem(SESSION_KEY, JSON.stringify(user))
  return { ok: true }
}
