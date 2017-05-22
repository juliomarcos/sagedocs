export interface Api {
    /**
     * E.g. Commenting API.
     */
    title: string,

    /**
     * E.g. Used by ACME App to
     * host user's comments.
     */
    description: string,

    /**
     * True if it's a valid API definition.
     */
    validate: () => boolean,

    /**
     * Generate this API
     * HTML documentation files.
     */
    docs: () => string,
}