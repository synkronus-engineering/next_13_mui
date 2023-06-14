"use client"
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <div className='container'>
      <div>
        <span>With default Theme:</span>
      </div>
      <Switch {...label} defaultChecked />
    </div>
  )
}
