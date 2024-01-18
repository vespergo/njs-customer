import { GetServerSideProps } from 'next';
import { Media, MediaPageProps } from '../types';
import { getMedia } from '../lib/db';

const MediaPage: React.FC<MediaPageProps> = ({ media }) => {
    return (
        <div>
            <h1>Media</h1>
            {media.map((media: Media) => (
                <ul key={media.id}>
                    <h2>{media.name}</h2>
                    <li>
                        <p>Location: {media.location}</p>
                    </li>
                    <li >
                        <p>Picture Location: {media.picture_location}</p>
                    </li>
                    <li >
                        <p>User Id: {media.user_id}</p>
                    </li>
                    <li>
                        <p>Created Time: {media.created_at}</p>
                    </li>
                </ul>
                ))}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const media = await getMedia();
    return {
        props: {
            media,
        },
    };
};

export default MediaPage;
