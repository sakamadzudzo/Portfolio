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

export type ProductItem = {
  id: number
  serialNumber: string
  product?: { id: number }
  productStatus?: { id: number }
}

export type Address = {
  id: number
  houseNumber: number
  street: string
  line1: string
  line2: string
  city: string
  state: string
  province: string
  country: string
  postalCode: string
}

export type BankAccount = {
  id: number
  accountNumber: string
  bankName: string
  branchName: string
  ifscCode: string
  dateTimeOpened: string
}

export type Salutation = {
  id: number
  title: string
  description: string
}

export type Role = {
  id: number
  name: string
  description: string
}

export type ContactType = {
  id: number
  name: string
  description: string
}

export type Contact = {
  id: number
  content: string
  contactType: ContactType
}

export type User = {
  id: number
  salutation: Salutation
  forename: string
  otherNames: string
  lastname: string
  username: string
  password?: string
  changePassword?: boolean
  roles?: Role[]
  addresses: Address[]
  bankAccounts: BankAccount[]
  contacts: Contact[]
}

export type SelectOption = { value: string | number, label: string, description?: string }