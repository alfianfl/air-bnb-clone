import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import InfoCard from '../components/infoCard';
import Map from '../components/Map'



function search({searchResult}) {
    const router = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formatedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formatedEndDate = format(new Date(endDate), "dd MMMM yyyy")
    const range = `${formatedStartDate} - ${formatedEndDate}`
    

    return (
        <div >
            <div className="flex">
                <section className="flex-grow pt-16 px-6">
                    <p className="text-xs">30+ Stays - {range} for {noOfGuests} guests </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden sm:inline-flex lg:inline-flex mb-5 whitespace-nowrap space-x-3 text-gray-800">
                        <p className="button">Cancelation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div className="flex flex-col">
                        {
                            searchResult.map(item=> (
                                <InfoCard 
                                    key={item.img}
                                    img={item.img}
                                    description={item.description}
                                    star={item.star}
                                    title={item.title}
                                    price={item.price}
                                    total={item.total}
                                    location={item.location}

                                />
                            ))
                        }
                    </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w:[600px]">
                    <Map searchResult={searchResult}/>
                </section>

            </div>
        </div>
    )
}

export async function getServerSideProps(){
    const searchResult = await fetch("https://links.papareact.com/isz")
        .then(res=> res.json());
    
    return{
        props: {
            searchResult
        }
    }
    

}

export default search
