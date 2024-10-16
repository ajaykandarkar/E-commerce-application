import { Card } from '../components';
import { UseGweleryHooks } from '../hooks/UseGweleryHooks';
export const DisplayGwelery = () => {
    const { gweleryData } = UseGweleryHooks();
    return (
        <>
            <div className='row justify-content-between' style={{ marginTop: "74px" }}>
                {
                    gweleryData && 
                    gweleryData.map((gweleryData, index) => (
                        <div key={index} className='col-md-6 col-lg-4 d-flex align-items-stretch'>
                            <Card
                                id = {gweleryData.id}
                                title={gweleryData.title}
                                price={gweleryData.price}
                                category={gweleryData.category}
                                image={gweleryData.image}
                                rating={gweleryData.rating}
                                description={gweleryData.description}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

