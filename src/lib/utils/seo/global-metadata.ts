import { Metadata } from "next";
import { DEFAULT_SEO_CONFIG } from "@/config/seo.config";

export async function GlobalMetadata(): Promise<Metadata> {
  return DEFAULT_SEO_CONFIG;
}
