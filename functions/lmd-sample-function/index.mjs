import { createClient } from '@redis/client';

export const handler = async (event, context) => {
    const client = createClient({
        url: 'redis://xxx.amazonaws.com:6379'
    });

    try {
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();

        const value = await client.get('myKey');
        console.log('Retrieved value from Redis:', value);

        await client.quit();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Data retrieved from Redis',
                value: value
            })
        };
    } catch (error) {
        console.error('Error:', error);

        if (client) {
            await client.quit();
        }

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to retrieve data from Redis' })
        };
    }
};
