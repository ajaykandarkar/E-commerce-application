import { Card } from '../components';
import { UseMensClothingHooks } from '../hooks/UseMensClothingHooks';
export const DisplayMensCloth = () => {
    const { mensClothsData } = UseMensClothingHooks();
    return (
        <>
            <div className='row justify-content-between' style={{ marginTop: "74px" }}>
                {
                    mensClothsData && 
                    mensClothsData.map((mensClothsData, index) => (
                        <div key={index} className='col-md-6 col-lg-4 d-flex align-items-stretch'>
                            <Card
                                id={mensClothsData.id}
                                title={mensClothsData.title}
                                price={mensClothsData.price}
                                category={mensClothsData.category}
                                image={mensClothsData.image}
                                rating={mensClothsData.rating}
                                description={mensClothsData.description}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

