import axios from "axios";
import { CoinData, ChartData, NftData, ExchangeData } from "../compontents/StateContext";

export const GetCoinsApi = async (): Promise<CoinData[]> => {
    try {
        const response = await axios.get('https://openapiv1.coinstats.app/coins?limit=300' , {
            headers: {
                accept: 'application/json',
                'X-API-KEY': '2Uyx5vjDsxm/iB0cl0uZxoEHYCyzMma5bxRtTfP+ZCc='
            }
        })
        return response.data.result;
    } catch (error: unknown) {
        console.log(error);
        return []; // При типизации промиса важно возвращать что-либо в блоке catch
    }
}

export const GetCoinChart = async (coinId: string | undefined, period: string): Promise<ChartData[]> => {
    try {
        const response = await axios.get(`https://openapiv1.coinstats.app/coins/${coinId}/charts?period=${period}` , {
            headers: {
                accept: 'application/json',
                'X-API-KEY': '2Uyx5vjDsxm/iB0cl0uZxoEHYCyzMma5bxRtTfP+ZCc='
            }
        })
        return response.data;
    } catch (error: unknown) {
        console.log(error);
        return []; // При типизации промиса важно возвращать что-либо в блоке catch
    }
}

export const GetNft = async (): Promise<NftData[]> => {
    try {
        const response = await axios.get('https://api.simplehash.com/api/v0/nfts/collections/top_v2?chains=ethereum%2Cpolygon%2Csolana&limit=100', {
            headers: {
                accept: 'application/json',
                'X-API-KEY': 'alexeystasov_sk_8th9rfr3xfhu0gk2uzhzmfckmtde8n76' // Вставьте ваш API-ключ
            }
        });
        return response.data.collections;
    } catch (error: unknown) {
        console.log(error);
        return [];
    }
}

export const GetExchanges = async (): Promise<ExchangeData[]> => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/exchanges');
        return response.data;
    } catch(error: unknown) {
        console.log(error);
        return [];
    }
}

export const GetPriceCoin = (coin: string): Promise<number> => { // Функция для получения актуальной стоимости
    return new Promise((resolve, reject) => {
        let total = 0;
        let count = 0;

        const websocket = new WebSocket(`wss://stream.binance.com:9443/ws/${coin.toLocaleLowerCase()}usdt@trade`);
        websocket.onmessage = (event) => {
            const trade = JSON.parse(event.data);
            total += parseFloat(trade.p);
            count++;
        };

        websocket.onerror = (error) => {
            reject(console.log(error));
        };
    
        const interval = setInterval(() => {
            if (count === 0) {
                return;
            }

            const avgPrice = total / count;

            resolve(avgPrice);
            
            if (websocket.readyState === websocket.OPEN) {
                websocket.close();
            }

            clearInterval(interval)
        }, 0);
        
    })
}