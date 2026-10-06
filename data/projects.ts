export type ProjectStatus = "completed" | "in-progress" | "archived"

export interface ProjectLinks {
  github: string
  demo: string | null
  paper: string | null
}

export interface DatasetInfo {
  name: string
  description: string
  size: string
  source: string
  preprocessing: string[]
}

export interface Architecture {
  model: string
  framework: string
  description: string
  keyComponents: string[]
}

export interface PipelineStep {
  step: number
  name: string
  description: string
}

export interface Metric {
  name: string
  value: string
  note: string
}

export interface Results {
  metrics: Metric[]
  highlights: string[]
}

export interface Project {
  id: string
  slug: string
  title: string
  shortTitle: string
  tagline: string
  featured: boolean
  badge: string
  status: ProjectStatus
  year: number
  links: ProjectLinks
  techStack: string[]
  categories: string[]
  overview: string
  problem: string
  dataset: DatasetInfo
  architecture: Architecture
  pipeline: PipelineStep[]
  results: Results
}

// ─── Data ────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "medical-image-segmentation",
    slug: "medical-image-segmentation",
    title: "Medical Image Segmentation",
    shortTitle: "Medical Image Segmentation",
    tagline:
      "Retinal vessel segmentation using MONAI and PyTorch — deployed as a production FastAPI service.",
    featured: true,
    badge: "🏆 MONAITHON — 1ST PLACE",
    status: "completed",
    year: 2025,
    links: {
      github: "https://github.com/SHETTYSHIVAM/retina-segmentation",
      demo: null,
      paper: null,
    },
    techStack: ["MONAI", "PyTorch", "FastAPI", "Streamlit", "Docker", "Python"],
    categories: ["Computer Vision", "Medical Imaging", "ML Systems"],
    overview:
      "Developed an automated retinal vessel segmentation pipeline using the MONAI framework and U-Net architecture on the DRIVE benchmark dataset. The model was deployed as a production-grade web service using FastAPI, Streamlit, and Docker — winning 1st place at the JNNCE MONAITHON Hackathon.",
    problem:
      "Manual retinal vessel segmentation is time-consuming and subject to inter-observer variability in clinical settings. An automated, accurate, and low-latency system is needed to assist ophthalmologists with early detection of diabetic retinopathy and other vascular diseases.",
    dataset: {
      name: "DRIVE (Digital Retinal Images for Vessel Extraction)",
      description:
        "A benchmark dataset for retinal vessel segmentation containing 40 color fundus photographs (20 training, 20 test), each at 565×584 resolution with expert-annotated vessel masks.",
      size: "100 images",
      source: "https://www.kaggle.com/datasets/andrewmvd/drive-digital-retinal-images-for-vessel-extraction",
      preprocessing: [
        "CLAHE (Contrast Limited Adaptive Histogram Equalization) for contrast enhancement",
        "Green channel extraction for vessel visibility",
        "Patch-based extraction (48×48) for training augmentation",
        "Normalization and tensor conversion using MONAI transforms",
      ],
    },
    architecture: {
      model: "U-Net",
      framework: "MONAI + PyTorch",
      description:
        "Standard U-Net encoder-decoder architecture with skip connections, implemented via the MONAI framework. The encoder uses 4 downsampling stages with instance normalization and Dropout for regularization.",
      keyComponents: [
        "MONAI UNet with 4 resolution levels",
        "DiceLoss + CrossEntropyLoss combined objective",
        "Adam optimizer with learning rate scheduling",
        "MONAI sliding window inference for full-image prediction",
      ],
    },
    pipeline: [
      { step: 1, name: "Data Ingestion", description: "Load DRIVE retinal dataset (.tif images, .gif vessel masks) and split into train/validation (80/20)." },
      { step: 2, name: "Preprocessing", description: "Extract green channel, normalize to [0,1], apply CLAHE for contrast enhancement, resize to 256×256, and binarize masks." },
      { step: 3, name: "Data Augmentation", description: "Apply MONAI transforms: flips, rotations, zoom, Gaussian noise, and contrast adjustment to improve generalization." },
      { step: 4, name: "Model Training", description: "Train MONAI U-Net (batch norm, deeper channels) using Dice + CrossEntropy loss, Adam optimizer, cosine LR scheduler, with early stopping." },
      { step: 5, name: "Validation & Monitoring", description: "Evaluate using Dice score every 2 epochs with sliding window inference; save best model checkpoint." },
      { step: 6, name: "Results Visualization", description: "Plot training loss & Dice curves and visualize predictions vs ground truth masks." },
      { step: 7, name: "Evaluation Metrics", description: "Compute Dice (~0.47), Precision (~0.32), Recall (~0.89), and F1-score (~0.47) on validation set." },
      { step: 8, name: "Model Export", description: "Save trained model weights (.pth) for deployment or inference." },
      { step: 9, name: "UI", description: "Streamlit frontend for image upload and segmentation overlay visualization." },
      { step: 10, name: "Containerization", description: "Dockerized service for portable, reproducible deployment." },
    ],
    results: {
      metrics: [
        { name: "Dice Score", value: "0.4729", note: "Measures spatial overlap between predicted segmentation and ground truth masks." },
        { name: "Precision", value: "0.3215", note: "Represents the proportion of predicted vessel pixels that are actually vessels." },
        { name: "Recall", value: "0.8929", note: "Represents the proportion of actual vessel pixels correctly identified by the model." },
        { name: "F1-Score", value: "0.4728", note: "Harmonic mean of precision and recall, combining both into a single metric." },
      ],
      highlights: [
        "1st Place at JNNCE MONAITHON Hackathon — recognized for superior model precision and deployment workflow",
        "Production-ready containerized deployment with FastAPI + Docker",
      ],
    },
  },

  {
    id: "khandava-forest-fire",
    slug: "khandava-forest-fire",
    title: "Khandava — Forest Fire Prediction",
    shortTitle: "Khandava",
    tagline:
      "Satellite-based forest fire prediction for Uttarakhand using multi-source geospatial data and XGBoost.",
    featured: true,
    badge: "GEOSPATIAL AI",
    status: "completed",
    year: 2025,
    links: {
      github: "https://github.com/SHETTYSHIVAM/Khandava",
      demo: null,
      paper: null,
    },
    techStack: ["XGBoost", "GDAL", "Python", "Pandas", "NumPy", "RasterIO", "ERA5", "SMOTE"],
    categories: ["Geospatial ML", "Remote Sensing", "Predictive Modeling"],
    overview:
      "Architected a predictive system for forest fire risk in Uttarakhand by integrating multi-source geospatial data from NASA FIRMS, ISRO Bhuvan/Bhoonidhi, and ECMWF ERA5. An XGBoost classifier was optimized for extreme class imbalance across 450,000+ samples, achieving 75% Recall for fire events.",
    problem:
      "Uttarakhand is one of India's most fire-prone states, with dense forest cover and challenging terrain making ground monitoring infeasible. Early prediction from satellite data can enable timely forest department response and evacuation. The core challenge is extreme class imbalance — fire events are rare relative to non-fire observations.",
    dataset: {
      name: "Multi-Source Geospatial Fusion Dataset",
      description:
        "Custom fused dataset combining fire detection, meteorological reanalysis, terrain, and land-use data across Uttarakhand's forest regions.",
      size: "450,000+ samples",
      source: "NASA FIRMS, ISRO Bhuvan, ISRO Bhoonidhi, ECMWF ERA5",
      preprocessing: [
        "ERA5 meteorological reanalysis (temperature, wind, humidity, precipitation) at 0.25° resolution",
        "DEM (Digital Elevation Model) — slope, aspect, elevation from ISRO Bhoonidhi",
        "LULC (Land Use Land Cover) classification rasters from ISRO Bhuvan",
        "NASA FIRMS VIIRS active fire detection as binary labels",
        "GDAL-based raster alignment and reprojection to common CRS",
        "SMOTE / class-weight tuning for extreme fire/non-fire imbalance",
      ],
    },
    architecture: {
      model: "XGBoost Classifier",
      framework: "scikit-learn + XGBoost",
      description:
        "Tabular ML pipeline where geospatial raster features are extracted per-pixel and fed into an XGBoost classifier. The model is optimized using Recall as the primary metric to minimize missed fire detections at the cost of a higher false positive rate.",
      keyComponents: [
        "Multi-source raster fusion and feature extraction via GDAL + RasterIO",
        "XGBoost with scale_pos_weight tuning for class imbalance",
        "Recall-optimized threshold selection (prioritizing early detection)",
        "Spatial cross-validation to prevent geographic data leakage",
      ],
    },
    pipeline: [
      { step: 1, name: "Data Acquisition", description: "Download ERA5, FIRMS, DEM, and LULC datasets for Uttarakhand bounding box." },
      { step: 2, name: "Raster Preprocessing", description: "GDAL-based CRS alignment, resampling, and clipping to study region." },
      { step: 3, name: "Feature Engineering", description: "Per-pixel feature extraction: wind speed, humidity, NDVI, slope, elevation, LULC class." },
      { step: 4, name: "Label Generation", description: "FIRMS fire hotspot labels matched to spatial grid." },
      { step: 5, name: "Class Balancing", description: "SMOTE + XGBoost scale_pos_weight for 450k+ imbalanced samples." },
      { step: 6, name: "Training", description: "XGBoost with early stopping, Recall-focused threshold tuning." },
      { step: 7, name: "Evaluation", description: "Spatial holdout evaluation on unseen geographic tiles." },
    ],
    results: {
      metrics: [
        { name: "Recall (Fire Events)", value: "75%", note: "Primary optimization target — early detection" },
        { name: "Samples Processed", value: "450,000+", note: "Multi-year geospatial dataset" },
        { name: "Data Sources", value: "4", note: "NASA, ISRO (×2), ECMWF" },
      ],
      highlights: [
        "75% Recall on fire events — maximizing early detection over global accuracy",
        "Successfully fused 4 heterogeneous geospatial data sources into a unified tabular dataset",
        "GDAL-based preprocessing pipeline handles high-resolution ERA5, DEM, and LULC rasters",
      ],
    },
  },

  {
    id: "coffee-ripeness-detection",
    slug: "coffee-ripeness-detection",
    title: "Coffee Ripeness Detection",
    shortTitle: "Coffee Ripeness",
    tagline:
      "Custom 3,000+ image dataset and YOLO-based detection model for precision agriculture in Chikkamagaluru.",
    featured: true,
    badge: "COMPUTER VISION",
    status: "completed",
    year: 2024,
    links: {
      github: "https://github.com/SHETTYSHIVAM/coffee",
      demo: null,
      paper: null,
    },
    techStack: ["YOLO", "Roboflow", "Python", "OpenCV", "PyTorch"],
    categories: ["Computer Vision", "Object Detection", "Precision Agriculture"],
    overview:
      "Curated a custom 3,000+ image dataset from coffee plantations in Kalasa, Chikkamagaluru, capturing real-world variation in lighting, occlusion, and plant structure. Trained a YOLO object detection model for multi-class detection of ripe vs. unripe coffee cherries and leaf structures.",
    problem:
      "Manual inspection of coffee cherry ripeness is labour-intensive and inconsistent across large plantations. Automated detection enables targeted picking, reducing waste and improving yield quality. The primary challenge is building a robust model from scratch without any existing domain-specific datasets.",
    dataset: {
      name: "Kalasa Coffee Plantation Dataset (Custom)",
      description:
        "Proprietary dataset collected directly from coffee plantations in Kalasa, Chikkamagaluru, Karnataka. Images captured under varied lighting, angles, and occlusion conditions representing real-world harvesting scenarios.",
      size: "3,000+ high-resolution images",
      source: "Field collection — Kalasa, Chikkamagaluru, Karnataka",
      preprocessing: [
        "Multi-class bounding box annotation via Roboflow: ripe cherry, unripe cherry, leaf",
        "Data augmentation: horizontal/vertical flip, brightness jitter, mosaic, random crop",
        "Train/val/test split: 80/10/10",
        "Roboflow export in YOLO format",
      ],
    },
    architecture: {
      model: "YOLOv8 (fine-tuned)",
      framework: "Ultralytics YOLOv8 + PyTorch",
      description:
        "YOLOv8 pre-trained on COCO, fine-tuned on the custom coffee dataset. Multi-class detection head outputs bounding boxes and class probabilities for ripe cherry, unripe cherry, and leaf categories.",
      keyComponents: [
        "YOLOv8n/s backbone fine-tuned for domain adaptation",
        "Roboflow-managed annotation and augmentation pipeline",
        "Multi-class detection: ripe cherry, unripe cherry, leaf structure",
        "Mosaic augmentation for robustness to occlusion",
      ],
    },
    pipeline: [
      { step: 1, name: "Field Data Collection", description: "3,000+ images captured from Kalasa plantation across varied lighting and angles." },
      { step: 2, name: "Annotation", description: "Multi-class bounding box labeling using Roboflow annotation tool." },
      { step: 3, name: "Augmentation", description: "Roboflow-based augmentation pipeline: flips, brightness, mosaic." },
      { step: 4, name: "Fine-tuning", description: "YOLOv8 fine-tuned from COCO weights on custom dataset." },
      { step: 5, name: "Evaluation", description: "mAP, Precision, Recall evaluated on held-out test split." },
      { step: 6, name: "Inference", description: "Real-time detection pipeline for plantation field use." },
    ],
    results: {
      metrics: [
        { name: "Dataset Size", value: "3,000+", note: "Custom field-collected images" },
        { name: "Classes", value: "6", note: "Ripe cherry, Unripe cherry, Semi Ripe Cherry, Overripe Cherry, Dry Cherry, Leaf" },
        { name: "mAP", value: "81.0%", note: "Mean average precision calculated at an intersection over union (IoU) threshold of 0.50. It's a measure of the model's accuracy considering only the easy detections." },
        { name: "Precision", value: "72.4%", note: " The accuracy of the detected objects, indicating how many detections were correct." },
        { name: "Recall", value: "78.7%", note: "The proportion of actual positive instances that are correctly identified." },
        { name: "F1-Score", value: "75.4%", note: " The harmonic mean of precision and recall, providing a balance between the two metrics." },
      ],
      highlights: [
        "First custom coffee ripeness dataset from the Chikkamagaluru region",
        "Multi-class annotation strategy improves contextual understanding via leaf structure detection",
        "Robust to natural environmental noise, varying camera angles, and occlusion",
      ],
    },
  },

  {
    id: "department-voting-platform",
    slug: "department-voting-platform",
    title: "Department Voting Platform",
    shortTitle: "Voting Platform",
    tagline:
      "Secure real-time voting system for departmental elections serving 120+ users with Firebase and Next.js.",
    featured: true,
    badge: "FULL-STACK — 120+ USERS",
    status: "completed",
    year: 2026,
    links: {
      github: "https://github.com/SHETTYSHIVAM/dept-voting-platform",
      demo: null,
      paper: null,
    },
    techStack: ["Next.js", "Firebase", "Firestore", "TypeScript", "Tailwind CSS"],
    categories: ["Full-Stack", "Web Application", "Systems"],
    overview:
      "Designed and deployed a secure web-based voting system for departmental elections, handling 120+ voters with real-time vote casting. Built with Next.js and Firebase, featuring role-based access control, Firestore atomic transactions, and real-time result tallying.",
    problem:
      "Departmental elections relied on manual paper-based voting — slow, error-prone, and lacking transparency. A digital system was needed that could handle concurrent voters, prevent duplicate votes, and provide real-time verifiable results.",
    dataset: {
      name: "",
      description: "",
      size: "",
      source: "",
      preprocessing: [],
    },
    architecture: {
      model: "Full-Stack Web System",
      framework: "Next.js 16 + Firebase",
      description:
        "Server-side rendered Next.js application with Firebase as the backend. Firebase Authentication handles voter identity; Firestore stores votes using atomic transactions to prevent race conditions and duplicate submissions.",
      keyComponents: [
        "Firebase Authentication for voter identity verification",
        "Firestore atomic transactions for vote integrity",
        "Role-based access control (voter / admin)",
        "Real-time Firestore listeners for live result updates",
        "Next.js App Router with server components for SSR",
      ],
    },
    pipeline: [
      { step: 1, name: "Auth", description: "Voter logs in via Firebase Auth — eligibility verified against allowlist." },
      { step: 2, name: "Ballot Display", description: "Candidate list fetched from Firestore, rendered via Next.js SSR." },
      { step: 3, name: "Vote Submission", description: "Atomic Firestore transaction records vote and marks voter as voted." },
      { step: 4, name: "Duplicate Prevention", description: "hasVoted flag checked server-side before each transaction." },
      { step: 5, name: "Live Results", description: "Admin dashboard with real-time Firestore listeners showing vote counts." },
      { step: 6, name: "Audit Trail", description: "Immutable Firestore vote log for result verification and transparency." },
    ],
    results: {
      metrics: [
        { name: "Active Users", value: "120+", note: "Voters in departmental election" },
        { name: "Duplicate Votes", value: "0", note: "Zero duplicate submissions" },
        { name: "Downtime", value: "0", note: "No system failures during election" },
      ],
      highlights: [
        "Served 120+ concurrent voters with zero duplicate votes or data integrity issues",
        "Real-time vote tallying visible to admins with Firestore live listeners",
        "Role-based access control ensures only eligible voters can submit ballots",
      ],
    },
  },

  {
    id: "ar-car-visualization",
    slug: "ar-car-visualization",
    title: "AR 3D Car Visualization",
    shortTitle: "AR Car Viz",
    tagline:
      "Unity-based AR application for real-time 3D vehicle customization with interactive mesh and material controls.",
    featured: false,
    badge: "🏅 HACKYUGMA — 3RD PLACE",
    status: "completed",
    year: 2025,
    links: {
      github: "https://github.com/SHETTYSHIVAM/52_U-235",
      demo: null,
      paper: null,
    },
    techStack: ["Unity", "AR Foundation", "C#", "ARCore"],
    categories: ["Augmented Reality", "3D Systems", "Interactive"],
    overview:
      "Built a Unity-based Augmented Reality application for customizable real-time 3D vehicle visualization. Users can manipulate vehicle mesh in real-time — swapping materials, adjusting lighting, and interacting with 3D components in an AR environment. Won 3rd place at HackYugma Hackathon.",
    problem:
      "Traditional car showrooms lack interactive digital experiences. Customers cannot visualize real-time customization (color, material, configuration) before purchase. An AR prototype demonstrates how immersive technology can transform the automotive retail experience.",
    dataset: {
      name: "",
      description: "",
      size: "",
      source: "",
      preprocessing: [],
    },
    architecture: {
      model: "AR Runtime System",
      framework: "Unity + AR Foundation (ARCore)",
      description:
        "Unity AR Foundation application using ARCore plane detection to anchor a 3D vehicle model to physical surfaces. Runtime mesh manipulation and material swapping implemented via Unity C# scripts.",
      keyComponents: [
        "AR Foundation plane detection and spatial anchoring",
        "Runtime material swapping via Unity MaterialPropertyBlock",
        "Interactive mesh manipulation with touch/gesture input",
        "Dynamic lighting adjustment in AR scene",
        "Unity URP (Universal Render Pipeline) for mobile performance",
      ],
    },
    pipeline: [
      { step: 1, name: "AR Initialization", description: "ARCore detects horizontal planes in physical environment." },
      { step: 2, name: "Model Placement", description: "User taps to anchor 3D vehicle mesh on detected plane." },
      { step: 3, name: "Interaction", description: "Touch/gesture controls enable rotation, scaling, and part selection." },
      { step: 4, name: "Customization", description: "Material and color swapping applied at runtime via Unity C#." },
      { step: 5, name: "Lighting Control", description: "Dynamic lighting parameters adjustable in real-time." },
    ],
    results: {
      metrics: [
        { name: "Hackathon Place", value: "3rd", note: "HackYugma, YUGMA TechFest, JNNCE" },
        { name: "Platform", value: "Android", note: "ARCore-compatible devices" },
      ],
      highlights: [
        "3rd Place at HackYugma Hackathon, YUGMA TechFest, JNNCE",
        "Real-time mesh manipulation and material swapping in AR",
        "Demonstrates automotive retail use case for immersive AR technology",
      ],
    },
  },
  {
    id: "animal-sound-recognition",
    slug: "animal-sound-recognition",
    title: "Animal Sound Recognition",
    shortTitle: "Animal Sound Recognition",
    tagline:
      "Audio classification pipeline for recognizing animal sounds using YAMNet and classical audio features, optimized for edge deployment.",
    featured: true,
    badge: "AUDIO AI",
    status: "completed",
    year: 2026,

    links: {
      github: "https://github.com/SHETTYSHIVAM/animal_sound_recognition.git",
      demo: null,
      paper: null,
    },

    techStack: [
      "YAMNet",
      "Python",
      "TensorFlow",
      "MFCC",
      "Mel Spectrogram",
      "TensorFlow Lite",
    ],

    categories: ["Audio AI", "Deep Learning", "Edge AI", "TinyML"],

    overview:
      "Developed an end-to-end audio classification pipeline for animal sound recognition using Google's YAMNet alongside MFCC and Mel spectrogram features. The pipeline was optimized for lightweight inference and edge deployment, achieving a recall of 0.846.",

    problem:
      "Animal sound analysis can require processing large volumes of audio while operating under constrained computational resources. A lightweight classification pipeline is needed to extract meaningful acoustic features and perform reliable recognition on edge devices.",

    dataset: {
      name: "Animal Sound Dataset",
      description:
        "Audio dataset containing recordings of animal vocalizations used for feature extraction, classification, and evaluation.",
      size: "Not specified",
      source: "Dataset-dependent",
      preprocessing: [
        "Audio normalization and preprocessing",
        "MFCC feature extraction",
        "Mel spectrogram generation",
        "YAMNet embeddings for transfer learning",
        "Feature preparation for lightweight inference",
      ],
    },

    architecture: {
      model: "YAMNet + Audio Feature Classification",
      framework: "TensorFlow",
      description:
        "Audio classification pipeline combining YAMNet-based embeddings with traditional acoustic representations such as MFCCs and Mel spectrograms.",
      keyComponents: [
        "YAMNet pretrained audio embeddings",
        "MFCC-based acoustic feature extraction",
        "Mel spectrogram generation",
        "Audio classification pipeline",
        "Lightweight inference optimization for edge devices",
      ],
    },

    pipeline: [
      {
        step: 1,
        name: "Audio Preprocessing",
        description:
          "Load and preprocess animal audio recordings for consistent classification input.",
      },
      {
        step: 2,
        name: "Feature Extraction",
        description:
          "Extract MFCCs and Mel spectrogram representations from the audio signals.",
      },
      {
        step: 3,
        name: "YAMNet Embeddings",
        description:
          "Generate pretrained YAMNet audio embeddings to capture high-level acoustic features.",
      },
      {
        step: 4,
        name: "Classification",
        description:
          "Use extracted audio representations for animal sound classification.",
      },
      {
        step: 5,
        name: "Evaluation",
        description:
          "Evaluate classification performance with recall as a key metric.",
      },
      {
        step: 6,
        name: "Edge Optimization",
        description:
          "Optimize the inference pipeline for deployment on resource-constrained TinyML and edge platforms.",
      },
    ],

    results: {
      metrics: [
        {
          name: "Recall",
          value: "0.846",
          note: "Primary reported classification recall.",
        },
      ],

      highlights: [
        "Achieved 0.846 recall for animal sound recognition",
        "Combined YAMNet embeddings with MFCC and Mel spectrogram features",
        "Optimized the inference pipeline for TinyML and edge deployment",
      ],
    },
  },


  {
    id: "edge-ai-beehive-monitoring",
    slug: "edge-ai-beehive-monitoring",
    title: "Edge AI Beehive Monitoring",
    shortTitle: "Beehive Monitoring",
    tagline:
      "ESP32-based edge AI system for real-time beehive health monitoring using environmental, weight, and acoustic sensing.",
    featured: true,
    badge: "EDGE AI + IoT",
    status: "completed",
    year: 2026,

    links: {
      github: "https://github.com/SHETTYSHIVAM/beehive",
      demo: null,
      paper: null,
    },

    techStack: [
      "ESP32",
      "Python",
      "MFCC",
      "TensorFlow",
      "DHT22",
      "HX711",
      "INMP441",
      "Firebase",
    ],

    categories: ["Edge AI", "IoT", "Audio AI", "Embedded Systems"],

    overview:
      "Built an ESP32-based IoT monitoring system for beehive health analysis by combining environmental, weight, and acoustic sensors. Developed an MFCC-based audio classification pipeline to analyze bee sounds and support lightweight edge inference.",

    problem:
      "Beehive health can be affected by changes in environmental conditions, colony activity, and acoustic behavior. Continuous monitoring across multiple sensor modalities can provide useful signals for detecting changes in hive conditions without relying entirely on manual inspection.",

    dataset: {
      name: "Beehive Sensor & Audio Data",
      description:
        "Multimodal hive monitoring data consisting of environmental measurements, hive weight readings, and recorded bee sounds.",
      size: "Project-specific",
      source: "ESP32 sensor collection",
      preprocessing: [
        "Environmental sensor data collection",
        "Hive weight measurement using HX711",
        "Audio recording using microphone sensor",
        "Audio preprocessing and normalization",
        "MFCC feature extraction for bee-sound analysis",
      ],
    },

    architecture: {
      model: "MFCC-based Audio Classification",
      framework: "Python + ESP32",
      description:
        "Multimodal edge monitoring architecture combining ESP32 sensor acquisition with lightweight audio feature extraction and classification for bee-sound analysis.",
      keyComponents: [
        "ESP32-based sensor acquisition",
        "DHT22 temperature and humidity monitoring",
        "HX711 load-cell based hive weight monitoring",
        "Microphone-based acoustic monitoring",
        "MFCC feature extraction",
        "Lightweight edge audio inference",
        "Firebase-based sensor data storage",
      ],
    },

    pipeline: [
      {
        step: 1,
        name: "Sensor Acquisition",
        description:
          "Collect temperature, humidity, hive weight, and acoustic data using ESP32-connected sensors.",
      },
      {
        step: 2,
        name: "Environmental Monitoring",
        description:
          "Record DHT22 environmental measurements and HX711-based hive weight readings.",
      },
      {
        step: 3,
        name: "Audio Recording",
        description:
          "Capture bee sounds using a microphone connected to the embedded monitoring system.",
      },
      {
        step: 4,
        name: "Audio Feature Extraction",
        description:
          "Process bee sounds and extract MFCC features for acoustic classification.",
      },
      {
        step: 5,
        name: "Edge Inference",
        description:
          "Perform lightweight audio classification suitable for resource-constrained edge deployment.",
      },
      {
        step: 6,
        name: "Data Storage",
        description:
          "Store collected hive monitoring data for visualization and further analysis.",
      },
    ],

    results: {
      metrics: [
        {
          name: "Sensors",
          value: "3+",
          note: "Environmental, weight, and acoustic sensing modalities.",
        },
        {
          name: "Platform",
          value: "ESP32",
          note: "Embedded edge monitoring platform.",
        },
      ],

      highlights: [
        "Built an ESP32-based multimodal beehive monitoring system",
        "Integrated environmental, weight, and acoustic sensing",
        "Developed MFCC-based bee-sound classification",
        "Designed lightweight inference for edge deployment",
      ],
    },
  },
]

// ─── Helpers ─────────────────────────────────────────────────

/** All projects marked as featured */
export const featuredProjects: Project[] = projects.filter((p) => p.featured)

/** Look up a single project by its slug */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)

/** Look up a single project by its id */
export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id)

export default projects