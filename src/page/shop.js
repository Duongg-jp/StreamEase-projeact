import React, {useState} from 'react'
import dummyData from '../dummyData'
import Card from '../component/Card';

export default function ShoppPage (){
    const [listProducts, setListProducts] = useState(dummyData.listData);
    const listMatchData = listProducts.filter(o=>  o.type === 'outdoor')
    return <div className='container'>
       <div className='row py-3'>
            {
                listMatchData.map(o=>{
                    return <div className='col-12 col-md-3' key={o.id}>
                        <Card product={o} />
                    </div>
                })
            }

       </div>
    </div>
}