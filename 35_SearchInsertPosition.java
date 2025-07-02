class Solution {
    public int searchInsert(int[] nums, int target) {
        ArrayList<Integer> arr=new ArrayList<>();
        for(int i=0;i<nums.length;i++){
            arr.add(nums[i]);
        }
        arr.add(target);
        Collections.sort(arr);
        
        for(int i=0;i<arr.size();i++){
            if(arr.get(i)==target){
               return i;
            }
        }
        return 0;
    }
}