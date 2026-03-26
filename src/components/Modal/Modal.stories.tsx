import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "./";

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Modal> = {
  title: "Overlay/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
The **Modal** component is an overlay dialog that interrupts the current user flow to display critical information, request confirmations, or present complex forms. In a scientific context, it is ideal for actions such as "Confirm deletion of a soil sample" or "New fauna occurrence form".

## Features

- **Compound API**: Composed of \`ModalHeader\`, \`ModalTitle\`, \`ModalContent\`, and \`ModalFooter\`.
- **Portal Rendering**: Rendered at the end of \`<body>\` via \`React.createPortal\` to avoid z-index and overflow conflicts.
- **Focus Trap**: Keyboard focus is trapped inside the modal while it is open.
- **Scroll Lock**: The page background scroll is blocked while the modal is open.
- **Escape Key**: Pressing \`Escape\` triggers \`onClose\`.
- **Overlay Click**: Clicking the dark backdrop triggers \`onClose\` by default.
- **Sizes**: \`sm\`, \`md\`, \`lg\`, and \`full\`.

## Usage

\`\`\`tsx
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter } from "boulder-ui";

const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <ModalHeader>
    <ModalTitle>Confirm Deletion</ModalTitle>
  </ModalHeader>
  <ModalContent>
    <p>Are you sure you want to delete soil sample SS-047?</p>
  </ModalContent>
  <ModalFooter>
    <button onClick={() => setIsOpen(false)}>Cancel</button>
    <button onClick={handleDelete}>Delete</button>
  </ModalFooter>
</Modal>
\`\`\`
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// ─── Shared styles ────────────────────────────────────────────────────────────

const triggerButtonStyle: React.CSSProperties = {
  padding: "var(--boulder-spacing-sm) var(--boulder-spacing-lg)",
  background: "var(--boulder-color-primary)",
  color: "var(--boulder-color-text-inverse)",
  border: "none",
  borderRadius: "var(--boulder-radius-sm)",
  cursor: "pointer",
  fontFamily: "var(--boulder-font-family)",
  fontSize: "var(--boulder-font-size-md)",
  fontWeight: "var(--boulder-font-weight-medium)",
};

const secondaryButtonStyle: React.CSSProperties = {
  ...triggerButtonStyle,
  background: "transparent",
  color: "var(--boulder-color-text)",
  border: "1px solid var(--boulder-color-border)",
};

const dangerButtonStyle: React.CSSProperties = {
  ...triggerButtonStyle,
  background: "var(--boulder-color-danger)",
};

// ─── Stories ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  name: "Default — Confirm Deletion",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button style={triggerButtonStyle} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
          <ModalHeader>
            <ModalTitle>Delete Fauna Record</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <p style={{ margin: 0 }}>
              Are you sure you want to delete the occurrence record for{" "}
              <em>Panthera onca</em> (ID: OCC-2024-0391)? This action cannot be
              undone.
            </p>
          </ModalContent>
          <ModalFooter>
            <button style={secondaryButtonStyle} onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button style={dangerButtonStyle} onClick={() => setIsOpen(false)}>
              Delete Record
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A small confirmation modal. Supports closing via the close button, the Cancel button, clicking the overlay, or pressing Escape.",
      },
    },
  },
};

export const FormModal: Story = {
  name: "Form — New Soil Sample",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const inputStyle: React.CSSProperties = {
      width: "100%",
      padding: "var(--boulder-spacing-sm)",
      border: "1px solid var(--boulder-color-border)",
      borderRadius: "var(--boulder-radius-sm)",
      fontFamily: "var(--boulder-font-family)",
      fontSize: "var(--boulder-font-size-md)",
      color: "var(--boulder-color-text)",
      background: "var(--boulder-color-background)",
      boxSizing: "border-box",
    };

    const labelStyle: React.CSSProperties = {
      display: "block",
      marginBottom: "var(--boulder-spacing-xs)",
      fontSize: "var(--boulder-font-size-sm)",
      fontWeight: "var(--boulder-font-weight-medium)",
      color: "var(--boulder-color-text)",
      fontFamily: "var(--boulder-font-family)",
    };

    const fieldStyle: React.CSSProperties = {
      marginBottom: "var(--boulder-spacing-md)",
    };

    const gridStyle: React.CSSProperties = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--boulder-spacing-md)",
    };

    return (
      <>
        <button style={triggerButtonStyle} onClick={() => setIsOpen(true)}>
          New Soil Sample
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader>
            <ModalTitle>New Soil Sample</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <div style={fieldStyle}>
              <label style={labelStyle}>Sample ID</label>
              <input style={inputStyle} type="text" placeholder="e.g. SS-048" />
            </div>
            <div style={gridStyle}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Latitude</label>
                <input style={inputStyle} type="text" placeholder="-3.7038" />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Longitude</label>
                <input style={inputStyle} type="text" placeholder="-60.0249" />
              </div>
            </div>
            <div style={gridStyle}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Collection Date</label>
                <input style={inputStyle} type="date" />
              </div>
              <div style={fieldStyle}>
                <label style={labelStyle}>Depth (cm)</label>
                <input style={inputStyle} type="number" placeholder="0–20" />
              </div>
            </div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Horizon</label>
              <select style={inputStyle}>
                <option value="">Select horizon...</option>
                <option value="A">A — Organic matter surface</option>
                <option value="B">B — Subsoil</option>
                <option value="C">C — Parent material</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Field Notes</label>
              <textarea
                style={{ ...inputStyle, height: 80, resize: "vertical" }}
                placeholder="Describe collection conditions, vegetation cover, etc."
              />
            </div>
          </ModalContent>
          <ModalFooter>
            <button style={secondaryButtonStyle} onClick={() => setIsOpen(false)}>
              Cancel
            </button>
            <button style={triggerButtonStyle} onClick={() => setIsOpen(false)}>
              Save Sample
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A medium-sized modal containing a form for registering a new soil sample, demonstrating the composability of ModalContent with form elements.",
      },
    },
  },
};

export const LongContent: Story = {
  name: "Long Content — Scrollable Body",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button style={triggerButtonStyle} onClick={() => setIsOpen(true)}>
          View Data Usage Terms
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="md">
          <ModalHeader>
            <ModalTitle>Public Data Usage Terms</ModalTitle>
          </ModalHeader>
          <ModalContent>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} style={{ marginBottom: "var(--boulder-spacing-md)" }}>
                <p style={{ margin: "0 0 var(--boulder-spacing-xs)", fontWeight: "var(--boulder-font-weight-semibold)", color: "var(--boulder-color-text)", fontFamily: "var(--boulder-font-family)", fontSize: "var(--boulder-font-size-md)" }}>
                  {i + 1}. {["Data Attribution", "Permitted Use", "Redistribution", "Species Sensitivity", "Coordinate Precision", "Commercial Use", "Data Integrity", "Liability"][i]}
                </p>
                <p style={{ margin: 0, fontFamily: "var(--boulder-font-family)", fontSize: "var(--boulder-font-size-md)" }}>
                  All occurrence data sourced from GBIF, SpeciesLink, and INPA
                  repositories must be properly attributed in publications and
                  reports. The data is provided for academic and scientific
                  research purposes only. Redistribution of sensitive species
                  coordinates is strictly prohibited under IUCN guidelines.
                </p>
              </div>
            ))}
          </ModalContent>
          <ModalFooter>
            <button style={secondaryButtonStyle} onClick={() => setIsOpen(false)}>
              Decline
            </button>
            <button style={triggerButtonStyle} onClick={() => setIsOpen(false)}>
              I Agree
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A modal with long content that exceeds the viewport height. The ModalContent area scrolls independently while the ModalHeader and ModalFooter remain fixed.",
      },
    },
  },
};

export const NonDismissible: Story = {
  name: "Non-Dismissible — Required Action",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button style={triggerButtonStyle} onClick={() => setIsOpen(true)}>
          Start Import
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
          closeOnOverlayClick={false}
          hideCloseButton
        >
          <ModalHeader>
            <ModalTitle>Select CRS</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <p style={{ margin: 0, fontFamily: "var(--boulder-font-family)", fontSize: "var(--boulder-font-size-md)" }}>
              The uploaded shapefile does not contain a defined coordinate
              reference system. Please select the CRS to proceed with the import.
            </p>
          </ModalContent>
          <ModalFooter>
            <button style={triggerButtonStyle} onClick={() => setIsOpen(false)}>
              Use SIRGAS 2000 (EPSG:4674)
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A non-dismissible modal that forces the user to take an explicit action. The overlay click and the close button are both disabled. Pressing Escape will also not close it.",
      },
    },
  },
};

export const SizeLarge: Story = {
  name: "Size — Large (Shapefile Metadata)",
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const rowStyle: React.CSSProperties = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "var(--boulder-spacing-sm) 0",
      borderBottom: "1px solid var(--boulder-color-border)",
      fontFamily: "var(--boulder-font-family)",
      fontSize: "var(--boulder-font-size-md)",
    };

    return (
      <>
        <button style={triggerButtonStyle} onClick={() => setIsOpen(true)}>
          View Shapefile Metadata
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalHeader>
            <ModalTitle>Shapefile Metadata</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <p style={{ margin: "0 0 var(--boulder-spacing-md)", fontFamily: "var(--boulder-font-family)", fontSize: "var(--boulder-font-size-md)" }}>
              Detailed metadata for{" "}
              <code>atlantic_forest_remnants_2023.shp</code>.
            </p>
            {[
              ["File Name", "atlantic_forest_remnants_2023.shp"],
              ["Geometry Type", "MultiPolygon"],
              ["CRS", "SIRGAS 2000 / Geographic (EPSG:4674)"],
              ["Feature Count", "14,382"],
              ["Total Area", "1,315,460.8 ha"],
              ["Bounding Box", "-53.1°W, -33.7°S, -34.8°W, -1.0°S"],
              ["Source", "MapBiomas Collection 8 (2023)"],
              ["Last Modified", "2024-03-15"],
              ["File Size", "48.7 MB"],
              ["Encoding", "UTF-8"],
            ].map(([key, value]) => (
              <div key={key} style={rowStyle}>
                <span style={{ color: "var(--boulder-color-text-secondary)", fontWeight: "var(--boulder-font-weight-medium)" }}>{key}</span>
                <span style={{ color: "var(--boulder-color-text)" }}>{value}</span>
              </div>
            ))}
          </ModalContent>
          <ModalFooter>
            <button style={secondaryButtonStyle} onClick={() => setIsOpen(false)}>
              Close
            </button>
            <button style={triggerButtonStyle} onClick={() => setIsOpen(false)}>
              Import Layer
            </button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A large modal displaying detailed shapefile metadata in a structured key-value layout.",
      },
    },
  },
};
