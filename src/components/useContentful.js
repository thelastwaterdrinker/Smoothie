import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "ljyxpiqs8pf9",
    accessToken: "3_UpAvZtV4a4sK8YOuYpLIleF6vgSet0jDhoD2Ha1mo",
    host: "preview.contentful.com"
  });

  const getPhotos = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "smoothiePhotos"
      
      });

      const sanitizedEntries = entries.items.map((item) => {
        //const avatar = item.fields.avatar;
        return {
          ...item.fields,
          
          
        };
      });

      

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getPhotos };
};

export default useContentful;