"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <p>Error: {error.message}</p>
    </div>
  );
}
