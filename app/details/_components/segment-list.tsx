'use client'
import { redirect } from "next/navigation"
import { SegmentComponent } from "./segment-card"

export const FlightList = () => {
  const handleDetailsRedirect = async () => {
    // TODO: Call the API to get the details of the specific flight 
    redirect('/details')
  }

  return (
    <div className="p-10 h-full bg-white rounded-lg">
      {/* {
        demoFlights.map((flight: Flight, index: number) => ( */}
          <button className="mb-4 w-full" onClick={handleDetailsRedirect}>
            <SegmentComponent />
          </button>
        {/* ))
      } */}
    </div>
  )

}