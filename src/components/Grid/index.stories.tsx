import type { Meta, StoryObj } from '@storybook/react-vite'
import Grid from '.'

const meta = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'number',
      description: 'Gap between grid items (in pixels)',
      table: {
        type: { summary: 'number | string' },
      },
    },
    columns: {
      control: 'select',
      description:
        'Number of columns or CSS grid-template-columns value. Examples: 12 (number) or "repeat(5, 1fr)" or "200px 1fr 2fr" (string)',
      table: {
        type: { summary: 'number | string' },
      },
      options: ['repeat(12, 1fr)', 5],
    },
    rows: {
      control: 'text',
      description:
        'Number of rows or CSS grid-template-rows value. Examples: 3 (number) or "repeat(3, 100px)" or "auto 1fr auto" (string)',
      table: {
        type: { summary: 'number | string' },
      },
    },
    asChild: {
      control: 'boolean',
      description:
        'Merge Grid styles into child element instead of rendering a div',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default Grid with 12 columns
 */
export const Default: Story = {
  args: {
    columns: 12,
    gap: 16,
    children: (
      <>
        {Array.from({ length: 36 }, (_, i) => (
          <div
            key={i}
            style={{
              background: '#e0e0e0',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {i + 1}
          </div>
        ))}
      </>
    ),
  },
}

/**
 * Grid with custom CSS template string for columns
 * Use CSS grid-template-columns syntax for advanced layouts
 */
export const CustomColumnsString: Story = {
  args: {
    columns: 'repeat(5, 1fr)',
    gap: 20,
    children: (
      <>
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            style={{
              background: '#90caf9',
              padding: '30px',
              textAlign: 'center',
              borderRadius: '8px',
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </>
    ),
  },
}

/**
 * Grid with flexible rows and columns (1 column layout)
 * Perfect for vertical stacking with consistent spacing
 */
export const SingleColumnLayout: Story = {
  args: {
    columns: 1,
    gap: 24,
    children: (
      <>
        <div
          style={{
            background: '#ffcdd2',
            padding: '40px',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ margin: 0 }}>Header Section</h3>
          <p style={{ margin: '8px 0 0 0' }}>Full width content block</p>
        </div>
        <div
          style={{
            background: '#c8e6c9',
            padding: '40px',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ margin: 0 }}>Main Content</h3>
          <p style={{ margin: '8px 0 0 0' }}>Another full width block</p>
        </div>
        <div
          style={{
            background: '#fff9c4',
            padding: '40px',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ margin: 0 }}>Footer Section</h3>
          <p style={{ margin: '8px 0 0 0' }}>Last full width block</p>
        </div>
      </>
    ),
  },
}

/**
 * Grid with custom rows and columns using CSS syntax
 * Demonstrates advanced grid template strings
 */
export const CustomRowsAndColumns: Story = {
  args: {
    columns: '200px 1fr 2fr',
    rows: 'auto 1fr auto',
    gap: 16,
    style: { height: '400px' },
    children: (
      <>
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            style={{
              background: '#b39ddb',
              padding: '20px',
              textAlign: 'center',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Cell {i + 1}
          </div>
        ))}
      </>
    ),
  },
}

/**
 * asChild pattern - Grid styles are merged into a section element
 * Useful when you need semantic HTML or custom element types
 */
export const AsChildPattern: Story = {
  args: {
    asChild: true,
    columns: 3,
    gap: 20,
    children: (
      <section
        style={{
          border: '2px dashed #1976d2',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            background: '#bbdefb',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          Box 1
        </div>
        <div
          style={{
            background: '#bbdefb',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          Box 2
        </div>
        <div
          style={{
            background: '#bbdefb',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          Box 3
        </div>
        <div
          style={{
            background: '#bbdefb',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          Box 4
        </div>
        <div
          style={{
            background: '#bbdefb',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          Box 5
        </div>
        <div
          style={{
            background: '#bbdefb',
            padding: '30px',
            textAlign: 'center',
            borderRadius: '8px',
          }}
        >
          Box 6
        </div>
      </section>
    ),
  },
}

/**
 * Responsive Grid using CSS grid-template-columns
 * Demonstrates auto-fit pattern for responsive layouts
 */
export const ResponsiveAutoFit: Story = {
  args: {
    columns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 16,
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            style={{
              background: '#a5d6a7',
              padding: '40px 20px',
              textAlign: 'center',
              borderRadius: '8px',
            }}
          >
            Responsive {i + 1}
          </div>
        ))}
      </>
    ),
  },
}
