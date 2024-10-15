import { Card } from '../components';
import { UseElectronicHooks } from '../hooks/UseElectronicHooks';
export const DisplayElectronicData = () => {
    const { electronicData } = UseElectronicHooks();
    return (
        <>
            <div className='row justify-content-between' style={{ marginTop: "74px" }}>
                {
                    electronicData && 
                    electronicData.map((electronicData, index) => (
                        <div key={index} className='col-md-6 col-lg-4 d-flex align-items-stretch'>
                            <Card
                               id={electronicData.id}
                                title={electronicData.title}
                                price={electronicData.price}
                                category={electronicData.category}
                                image={electronicData.image}
                                rating={electronicData.rating}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

