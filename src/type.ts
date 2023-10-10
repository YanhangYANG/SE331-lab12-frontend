export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: EventOrganizer | string
  images: string[]
}

export interface EventOrganizer {
    id: number;
    name: string;
    userId: number | null;
    ownEvents: Event[];
    // If there are other fields present in the response that are not in this interface, add them here.
}


export interface StudentItem {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: number
  image: string
  penAmount: number
  description: string
}

export interface OrgItem {
    id: number
    name: string
    address: string
    image: string[]

}