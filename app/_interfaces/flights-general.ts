export interface Stop { 
    stop_time: string
    stop_airport: string 
}
export interface Flight {
    id: number
    deperture_city: string 
    deperture_code: string 
    deperture_time: string 
    deperture_day: string 
    arraival_city: string
    arraival_code: string 
    arraival_time: string 
    arraival_day: string 
    airline: string
    total_price: string 
    currency: string
    price_per_person: string 
    number_stops: number
    total_time: string 
    stops?: Stop[]
}