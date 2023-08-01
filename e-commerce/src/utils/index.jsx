export function handlePromise(promise) {
  let status = "pending";
  let fetching = promise.then(
    (result) => {
      status = "fulfilled";
      fetching = result;
    },
    (reason) => {
      status = "rejected";
      fetching = reason;
    }
  );
  return {
    read() {
      if (status === "fulfilled") {
        return fetching;
      } else if (status === "rejected") {
        throw fetching;
      } else {
        throw fetching;
      }
    },
  };
}

export async function fetchProduct(url) {
  try {
    const resp = await fetch(url);
    console.log(resp);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
