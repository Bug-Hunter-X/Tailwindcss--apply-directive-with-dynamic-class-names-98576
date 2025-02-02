```javascript
// Solution: Avoid using `@apply` with dynamic class names.

function MyComponent({ className }) {
  return (
    <div className={`bg-gray-100 ${className}`} >
      {/* ... */}
    </div>
  );
}
```