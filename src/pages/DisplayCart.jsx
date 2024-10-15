import { UseProductHooks } from '../hooks/UseProductHooks';
import { Card } from '../components';
export const DisplayCart = () => {
    const { product } = UseProductHooks();
    return (
        <>
                <div className='row justify-content-between' style={{marginTop:"74px"}}>
                    {
                        product.map((product, index) => (
                            <div key={index}  className='col-md-6 col-lg-4 d-flex align-items-stretch'>
                                <Card
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    category={product.category}
                                    image={product.image}
                                    rating={product.rating}
                                />
                            </div>
                        ))
                    }
                </div>
        </>
    );
};
