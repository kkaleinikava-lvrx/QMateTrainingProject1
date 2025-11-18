export abstract class Page {

    abstract waitForPageLoaded(): Promise<void>
    
}