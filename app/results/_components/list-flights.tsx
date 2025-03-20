import { FlightComponent } from "./flight-component"
import { demoFlight } from "../_consts/flight"

export const FlightList = () => {

    return (
        <div className="p-10 h-full bg-white rounded-lg">
            <FlightComponent flight={demoFlight} />
        </div>
    )

}