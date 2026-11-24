/** A project displayed in the portfolio. */
interface BaseProjectEntry {
  /** Name of the project. */
  title: string;
  /** Portfolio owner's role in the project. */
  role: string;
  /** Additional image data for the project, if available. */
  imageData: {
    /** Path or URL of the project thumbnail image. */
    thumbnail: string;
    /** CSS object-fit mode used to display the thumbnail. */
    objectFit: "fill" | "contain" | "cover";
  };
  /** Tags displayed on the project card and used for filtering. */
  tags: string[];
  /** Type of the project, e.g., "external" for projects with a URL. */
  type: string;
}

/** A project with an external URL. */
interface ExternalProjectEntry extends BaseProjectEntry {
  type: "external";
  /** External URL of the project. */
  url: string;
}

/** A project displayed in a popup within the portfolio. */
interface PopupProjectEntry extends BaseProjectEntry {
  type: "popup";
  description: string;
  gallery: {
    /** Path or URL of the gallery image. */
    imageUrl: string;
    /** CSS object-fit mode used to display the gallery image. */
    objectFit: "fill" | "contain" | "cover";
  }[];
  buttons: {
    /** Text displayed on the button. */
    text: string;
    /** URL or action triggered by the button. */
    url: string;
  }[];
}

/** Union type of all possible project entries. */
type ProjectEntry = ExternalProjectEntry | PopupProjectEntry;

/**
 * Projects featured in the portfolio.
 * Should follow the {@link ProjectEntry} structure.
 */
export const PROJECTS: Array<ProjectEntry> = [
  {
    title: "BlockForce",
    role: "Creator & Developer",
    imageData: {
      thumbnail: "./blockforce/thumbnail.png",
      objectFit: "cover"
    },
    tags: ["Minecraft", "Bedrock", "Addon", "TypeScript", "Physics"],
    type: "popup",
    description:
      "A Minecraft Bedrock addon that adds a physics gun for picking up, moving, and launching blocks and entities.",
    gallery: [
      {
        imageUrl: "./blockforce/gallery-1.png",
        objectFit: "contain"
      },
      {
        imageUrl: "./blockforce/gallery-2.png",
        objectFit: "contain"
      }
    ],
    buttons: [
      {
        text: "Resource Repository",
        url: "https://github.com/pyris-dev/BlockForce-Resource"
      },
      {
        text: "Behavior Repository",
        url: "https://github.com/pyris-dev/BlockForce-Behavior"
      },
      {
        text: "Addon Releases",
        url: "https://github.com/pyris-dev/BlockForce-Behavior/releases"
      }
    ]
  },
  {
    title: "BlockSmith",
    role: "Creator & Developer",
    imageData: {
      thumbnail: "https://pyris-dev.github.io/BlockSmith/banner.png",
      objectFit: "contain"
    },
    tags: ["React", "TypeScript", "Vite", "Minecraft", "Addon"],
    type: "external",
    url: "https://pyris-dev.github.io/BlockSmith/"
  },
  {
    title: "SerenityJS",
    role: "Contributor",
    type: "external",
    imageData: {
      thumbnail:
        "https://raw.githubusercontent.com/SerenityJS/serenity/develop/public/serenityjs-banner.png",
      objectFit: "contain"
    },
    tags: ["TypeScript", "Rust", "Node.js", "Minecraft", "Server", "Plugins"],
    url: "https://github.com/SerenityJS/serenity"
  },
  {
    title: "Pokebedrock",
    role: "Developer",
    imageData: {
      thumbnail:
        "https://media.licdn.com/dms/image/sync/v2/D4E27AQEDPjthNVGrqQ/articleshare-shrink_800/articleshare-shrink_800/0/1712501730036?e=2147483647&v=beta&t=uTfokgyUpyTShvb8F7e_sDIwuDKiow-KkZMc4r2ruN0",
      objectFit: "cover"
    },
    tags: ["Minecraft", "Bedrock", "Pokemon", "Addon", "Server"],
    type: "popup",
    description: "A Pokemon-themed Minecraft Bedrock server and addon.",
    gallery: [
      {
        imageUrl:
          "https://th.bing.com/th/id/OIP.E5bA1Gtc3xitzBA30TxlnwHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        objectFit: "contain"
      },
      {
        imageUrl:
          "https://mc-addons.com/uploads/posts/2023-05/1684480188_pokebedrock-minecraft-bedrock-pokmon-addon-213-pokemon_28-1.png",
        objectFit: "contain"
      },
      {
        imageUrl:
          "https://mc-addons.com/uploads/posts/2023-05/medium/1684480184_pokebedrock-minecraft-bedrock-pokmon-addon-213-pokemon_23-1.png",
        objectFit: "contain"
      }
    ],
    buttons: [{ text: "Visit website", url: "https://pokebedrock.com/home" }]
  }
];
