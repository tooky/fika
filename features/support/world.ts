import { defineParameterType, setWorldConstructor } from "@cucumber/cucumber";
import { ActorWorld, ActorParameterType } from "@cucumber/screenplay";

// Define an {actor} parameter type that creates Actor objects
defineParameterType(ActorParameterType);

// Define your own World class that extends from ActorWorld
export default class World extends ActorWorld {
    public get defaultActor() {
        return this.findOrCreateActor('default')
    }
}
setWorldConstructor(World);
