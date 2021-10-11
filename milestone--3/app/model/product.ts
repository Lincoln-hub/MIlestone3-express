export class product
{

	
    private id: string;
    private productName: string;
    private productDescription: string;
    private productPrice: string;

    constructor(id: string, prooductName: string,productDescription: string, productPrice: string ) 
    {
        this.id = id;
        this.productName = prooductName;
        this.productDescription = productDescription;
        this.productPrice = productPrice;
	}

    /**
     * Getter $id
     * @return {string}
     */
	public get $id(): string {
		return this.id;
	}

    /**
     * Getter $productName
     * @return {string}
     */
	public get $productName(): string {
		return this.productName;
	}

    /**
     * Getter $productDescription
     * @return {string}
     */
	public get $productDescription(): string {
		return this.productDescription;
	}

    /**
     * Getter $productPrice
     * @return {string}
     */
	public get $productPrice(): string {
		return this.productPrice;
	}

    /**
     * Setter $id
     * @param {string} value
     */
	public set $id(value: string) {
		this.id = value;
	}

    /**
     * Setter $productName
     * @param {string} value
     */
	public set $productName(value: string) {
		this.productName = value;
	}

    /**
     * Setter $productDescription
     * @param {string} value
     */
	public set $productDescription(value: string) {
		this.productDescription = value;
	}

    /**
     * Setter $productPrice
     * @param {string} value
     */
	public set $productPrice(value: string) {
		this.productPrice = value;
	}
    

}