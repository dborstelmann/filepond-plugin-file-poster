declare module "filepond-plugin-file-poster" {
    const FilePondPluginFilePoster: FilePondPluginFilePosterProps;
    export interface FilePondPluginFilePosterProps {
        /** Enable or disable file poster */
        allowFilePoster?: boolean;

        /** Fixed poster height */
        filePosterHeight?: number;

        /** Min poster height */
        filePosterMinHeight?: number;

        /** Max poster height */
        filePosterMaxHeight?: number;

        /** filters file items to determine which are shown as poster */
        filePosterFilterItem?: () => true;

        /** Enables or disables reading average image color */
        filePosterCalculateAverageImageColor?: boolean;

        /** Allows setting the value of the CORS attribute (null is don't set attribute) */
        filePosterCrossOriginAttributeValue?: string;
    }
    export default FilePondPluginImagePreview;
}
