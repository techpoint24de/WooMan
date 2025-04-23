import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { GetOrdersParams, Order } from "./types/getOrder";

export interface WooManConfig {
  url: string;
  consumerKey: string;
  consumerSecret: string;
  version?: string;
}

export class WooManClient {
  private client: ReturnType<typeof axios.create>;
  private config: WooManConfig;

  constructor(config: WooManConfig) {
    this.config = {
      version: "wc/v3",
      ...config,
    };

    this.client = axios.create({
      baseURL: `${this.config.url}/wp-json/${this.config.version}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Add authentication parameters to the URL
        const params = new URLSearchParams(config.params || {});
        params.append("consumer_key", this.config.consumerKey);
        params.append("consumer_secret", this.config.consumerSecret);
        config.params = params;
        return config;
      }
    );
  }

  public async getOrders(params: GetOrdersParams) {
    const response = await this.client.get("/orders", { params });
    return response.data as Order[];
  }
}
