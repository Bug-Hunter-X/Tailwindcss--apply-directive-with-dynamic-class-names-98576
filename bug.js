```javascript
// Example showing the unexpected behavior when using Tailwind's `@apply` directive with a dynamic class name.

function MyComponent({ className }) {
  return (
    <div className={`bg-gray-100 ${className}`} >
      {/* ... */}
    </div>
  );
}
```