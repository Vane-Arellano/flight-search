export interface Stop { 
    stop_time: string
    stop_airport: string 
}
export const flightInitialState = {
    id: 0,
    deperture_city: "", 
    deperture_code: "",
    deperture_time: "",
    deperture_day: "", 
    arrival_city: "",
    arrival_code: "", 
    arrival_time: "",
    arrival_day: "", 
    airline: "",
    total_price: "", 
    currency: "",
    price_per_person: "", 
    number_stops: 0,
    total_time: "", 
    stops: [],
}