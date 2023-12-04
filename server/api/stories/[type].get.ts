import { ItemType, itemTypes } from "@/types/item";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const type = getRouterParam(event, "type");

  if (!type) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing item type",
    });
  }

  if (!itemTypes.includes(type as ItemType)) {
    throw createError({
      statusCode: 400,
      statusMessage: `Unsupported item type: ${type}`,
    });
  }

  try {
    return await $fetch(`/${type}stories.json`, {
      baseURL: config.hnBaseUrl,
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: (error as Error).message,
    });
  }
});
