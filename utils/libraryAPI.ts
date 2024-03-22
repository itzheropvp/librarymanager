import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class libraryAPI {
    constructor() {}    
    
    public async getGenres(params?:any, genre?: number): Promise<any> {
        try {
            const client = this.createClient(params || undefined);
            const response = await client.get(genre ? `/api/genre/${genre.toString()}` : '/api/genre');
            return response.data;
        } catch (error: any) {
            throw Error(error);
        }
    }    

    public async getGenreByName(params?:any, genre?: string): Promise<any> {
        try {
            const client = this.createClient(params || undefined);
            const response = await client.get('/api/genre');
            for (const index in response.data) {
                const data = response.data[index];
                if (data.description == genre) {
                    return data;
                }
            }
            return undefined;
        } catch (error: any) {
            throw Error(error);
        }
    }
    
    public async get() {

    }

    private getEndpoint(): any {
        return process.env.LIBRARY_ENDPOINT || "";
    }
    
    private createClient(params: object = {}): AxiosInstance {
        const config: AxiosRequestConfig = {
            baseURL: this.getEndpoint(),
            params: params,
        }
        return axios.create(config);
    }
}