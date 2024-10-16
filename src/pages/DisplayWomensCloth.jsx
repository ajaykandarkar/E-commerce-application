
import { Card } from '../components';
import { UseWomensCloth } from '../hooks/UseWomensCloth';
export const DisplayWomensCloth = () => {
    const { WomensClothsData } = UseWomensCloth();
    return (
        <>
            <div className='row justify-content-between' style={{ marginTop: "74px" }}>
                {
                    WomensClothsData && 
                    WomensClothsData.map((WomensClothsData, index) => (
                        <div key={index} className='col-md-6 col-lg-4 d-flex align-items-stretch'>
                            <Card
                               id = {WomensClothsData.id}
                                title={WomensClothsData.title}
                                price={WomensClothsData.price}
                                category={WomensClothsData.category}
                                image={WomensClothsData.image}
                                description={WomensClothsData.description}
                                rating={WomensClothsData.rating}
                                
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

