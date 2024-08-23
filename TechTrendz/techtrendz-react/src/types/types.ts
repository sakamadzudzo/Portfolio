// Auth State
// export interface AuthState {
//   token: string | null;
//   isAuthenticated: boolean | null;
//   loading: boolean;
//   user: any;
//   error: string | null;
// }

// App State
// export interface AppState {
//   auth: AuthState;
// }

export interface Props {
  children: React.ReactNode;
}

export interface Product {
  id: number
  name: string
  description: string
  brand: Brand
  productType: ProductType
  productItems: []
  tags: Tag[]
  price: number
}

export type Tag = {
  id: number
  name: string
  description: string
}

export type ProductType = {
  id: number
  name: string
  description: string
}

export type Brand = {
  id: number
  name: string
  description: string
}

export type SelectOption = { value: string | number, label: string, description?: string }