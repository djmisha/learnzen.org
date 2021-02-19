import React, { Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: "_UbxMgt2DCy3NXgekvpwIxihjPVup7e1dBrmLwGoDm0",
});

const PhotoComp = ({ photo }) => {
    const { user, urls } = photo;

    return (
        <Fragment>
            <img className="img" src={urls.regular} alt="unsplash" />
            <div className="unsplash-credit">
                Photo by{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://unsplash.com/@${user.username}`}
                >
                    {user.name}
                </a>
            </div>
        </Fragment>
    );
};

const Unsplash = () => {
    const [data, setPhotosResponse] = useState(null);

    useEffect(() => {
        api.collections
            .getPhotos({
                collectionId: "904914",
                perPage: 10,
                // orientation: "portrait",
            })
            .then((result) => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log("something went wrong!");
            });
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
                <div>PS: Make sure to set your access token!</div>
            </div>
        );
    } else {
        let photos = data.response.results;
        let randNumber = Math.floor(Math.random() * photos.length);
        let selectedPhoto = [];
        for (let i = 0; i < photos.length; i++) {
            if (i === randNumber) {
                selectedPhoto.push(photos[i]);
            }
        }
        return (
            <div className="unsplash-feed">
                {selectedPhoto.map((photo) => (
                    <div key={photo.id} className="li">
                        <PhotoComp photo={photo} />
                    </div>
                ))}
            </div>
        );
    }
};

export default Unsplash;
