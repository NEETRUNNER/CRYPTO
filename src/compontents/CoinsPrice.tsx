import { TokenIcon } from '@web3icons/react'
import { usePropsContext } from './StateContext';

const CoinsPrice = ({className}: any) => {
    const {btc, eth, bnb} = usePropsContext();

    return (
        <div className={`header-coins flex ${className}`}>
                <div className='flex items-center mx-2'>
                    <TokenIcon symbol='btc' variant='branded' size={40}/>
                    <h1 className="text-white font-semibold">{btc?.toFixed(2)}</h1>
                </div>
                <div className='flex items-center mx-2'>
                    <TokenIcon symbol='eth' variant='branded' size={40}/>
                    <h1 className="text-white font-semibold">{eth?.toFixed(2)}</h1>
                </div>
                <div className='flex items-center mx-2'>
                    <TokenIcon symbol='bnb' variant='branded' size={40}/>
                    <h1 className="text-white font-semibold">{bnb?.toFixed(2)}</h1>
                </div>
            </div>
    )
}

export default CoinsPrice;