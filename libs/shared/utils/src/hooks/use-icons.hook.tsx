import { useEffect, useState } from 'react'

interface useIconsProps {
  fileName: string
  prefix?: string
}

function useIcons({ fileName, prefix }: useIconsProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`./../../../ui/src/cuHacking/assets/icons${prefix ?? ''}/${fileName}`)
        setImage(response.default.src)
      }
      catch (err) {
        setError(err)
      }
      finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [prefix, fileName])

  return {
    loading,
    error,
    image,
  }
}

export default useIcons
