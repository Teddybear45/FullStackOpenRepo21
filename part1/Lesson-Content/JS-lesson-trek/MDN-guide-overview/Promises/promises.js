new Promise((resolve, reject) => {
	console.log("Initial");

	resolve();
})
	.then(() => {
		throw new Error("Something failed");

		console.log("Do this");
	})
	.catch((err) => {
		console.error("Do that" + " | Error was: " + err);
	})
	.then(() => {
		console.log("Do this, no matter what happened before");
	})
	.finally(() => {
		console.log("Finally, print this");
	});

console.log("NEXT OPERATION");

// whenever a promise is rejected, one of two events are sent to the global window or web worker.
// the event can be rejectionhandled or unhandledrejection
// useful for Node.js

process.on("unhandledRejection", (reason, promise) => {
	/* You might start here by adding code to examine the
	 * "promise" and "reason" values. */
});
