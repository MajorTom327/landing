export type EnvConfiguration = {
  required: Record<string, string>;
  optional?: Record<string, string>;
}

export const envCheck = (configuration: EnvConfiguration) => {

  const { required, optional } = configuration;

  const missingRequired = Object.keys(required).filter(key => !process.env[key]);

  if (missingRequired.length > 0) {
    throw new Error(`Missing required environment variables: ${missingRequired.join(", ")}`);
  }

  const missingOptional = Object.keys(optional || {}).filter(key => !process.env[key]);

  if (missingOptional.length > 0) {
    console.warn(`Missing optional environment variables: ${missingOptional.join(", ")}`);
  }
}

export default envCheck;
