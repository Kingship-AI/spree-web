// API utility for fetching shared products
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://4.242.5.141:8004/api';

/**
 * Fetch a shared product by share_id
 * @param {string} shareId - The share ID from the URL
 * @returns {Promise<Object>} Product data
 */
export const fetchSharedProduct = async (shareId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/share/product/${shareId}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Product not found');
      }
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('[API] Error fetching shared product:', error);
    throw error;
  }
};
