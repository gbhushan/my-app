export const IMAGE_ACTION_TYPES = {
  FETCH_IMAGES_START: "FETCH_IMAGES_START",
  FETCH_IMAGES_SUCCESS: "FETCH_IMAGES_SUCCESS"
}

export const fetchImages = (details) => ({
  type: IMAGE_ACTION_TYPES.FETCH_IMAGES_START,
  payload: details
})

export const onSuccess = (details) => ({
  type: IMAGE_ACTION_TYPES.FETCH_IMAGES_SUCCESS,
  payload: details
})