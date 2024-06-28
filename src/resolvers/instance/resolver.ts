import { AxiosInstance } from "axios";
import {
  CreateInstanceParams,
  CreateInstanceResponse,
  InfoInstanceResponse,
  ListInstancesResponse,
  WebhookDefineParams,
  WebhookStatusResponse,
} from "./types";

export interface InstanceResolverType {
  list(): Promise<ListInstancesResponse>;
  create(params: CreateInstanceParams): Promise<CreateInstanceResponse>;
  info(instanceName: string): Promise<InfoInstanceResponse>;
  logout(instanceName: string): Promise<void>;
  delete(instanceName: string): Promise<void>;
  webhookStatus(instanceName: string): Promise<WebhookStatusResponse | null>;
  webhookSet(
    instanceName: string,
    params: WebhookDefineParams
  ): Promise<WebhookStatusResponse>;
}

export class InstanceResolver implements InstanceResolverType {
  constructor(private api: AxiosInstance) {}

  async list(): Promise<ListInstancesResponse> {
    try {
      const response = await this.api.get("/instance/fetchInstances");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async create(params: CreateInstanceParams): Promise<CreateInstanceResponse> {
    try {
      const response = await this.api.post("/instance/create", params);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async info(instanceName: string): Promise<InfoInstanceResponse> {
    try {
      const response = await this.api.get(
        "/instance/connectionState/" + instanceName
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async logout(instanceName: string): Promise<void> {
    try {
      await this.api.delete("/instance/logout/" + instanceName);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(instanceName: string): Promise<void> {
    try {
      await this.api.delete("/instance/delete/" + instanceName);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async webhookStatus(instanceName: string): Promise<WebhookStatusResponse> {
    try {
      const response = await this.api.get("/webhook/find/" + instanceName);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async webhookSet(
    instanceName: string,
    params: WebhookDefineParams
  ): Promise<WebhookStatusResponse> {
    try {
      const response = await this.api.post(
        "/webhook/set/" + instanceName,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
