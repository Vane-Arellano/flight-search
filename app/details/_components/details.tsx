'use client'

import { redirect } from "next/navigation"
import { PriceBreakdown } from "./price-breakdown"
import { CustomSeparator } from "./separator"
import { PerTraveler } from "./price-per-traveler"
import { SegmentComponent } from "./segment-card"

export const FlightDetails = () => {

  const handleDetailsRedirect = async () => {
    // TODO: Call the API to get the details of the specific flight 
    redirect('/details')
  }

  return (
    <div className="flex flex-row p-10 h-full bg-white rounded-lg gap-4">
        <div className="border rounded-lg w-3/4 overflow-y-scroll">
            <SegmentComponent/> 
        </div>
        <div className="w-1/4 bg-zinc-100/50 p-10 flex flex-col justify-between">
            <PriceBreakdown/> 
            <CustomSeparator/> 
            <PerTraveler/>
        </div>
    </div>
  )

}