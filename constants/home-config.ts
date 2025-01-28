export interface Scene {
    id: string
    name: string
    icon: string
  }
  
  export interface Room {
    id: string
    name: string
    imageUrl: string
    temperature: number
    occupancy: number
  }
  
  export interface NavItem {
    id: string
    label: string
    icon: string
  }
  
  export interface HomeConfig {
    currency: string
    scenes: Scene[]
    rooms: Room[]
    navItems: NavItem[]
    costPeriod: string
  }
  
  