"use client";
import { useState, useEffect } from "react";

export default function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.genderize.io/?name=luc")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.gender}</h1>
      <p>{data.count}</p>
    </div>
  );
}
