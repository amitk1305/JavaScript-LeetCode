class EventEmitter {
    callbacks = [];
    subscribe(event, cb) {
        /* Since everything in the callbacks array is arrays of functions,
           and all functions in JS are truthy,
           being truthy and existing is the same thing here */
        this.callbacks[event] = this.callbacks[event] || [];

        // Push cb
        this.callbacks[event].push(cb);

        return {
            unsubscribe: () => {
                // Delete callback (or the entire event)
                if (this.callbacks[event].length > 1)
                    this.callbacks[event].shift();
                else
                    delete this.callbacks[event];
            }
        };
    }

    emit(event, args = []) {
        // Call and return all callbacks of the event
        if (this.callbacks[event])
            return this.callbacks[event].map((cb) => cb(...args));
        return [];
    }
}