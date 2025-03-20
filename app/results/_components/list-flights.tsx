import { FlightComponent } from "./flight-component"
import { demoFlights } from "../_consts/flight"
import { Flight } from "./flight-component"

export const FlightList = () => {

    return (
        <div className="p-10 h-full bg-white rounded-lg">
            {
                demoFlights.map((flight: Flight, index: number) => (
                    <div key={index} className="mb-4">
                        <FlightComponent flight={flight} />
                    </div>
                ))
            }
        </div>
    )

}